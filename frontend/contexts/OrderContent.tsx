// contexts/OrderContext.tsx
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { Product, CartItem, Order } from "../types/models";

interface OrderState {
  cart: CartItem[];
  currentOrder: Order | null;
  pendingOrders: Order[];
  orderHistory: Order[];
  isLoading: boolean;
  error: string | null;
}

type OrderAction =
  | { type: "ADD_TO_CART"; payload: { product: Product; quantity: number } }
  | { type: "REMOVE_FROM_CART"; payload: { productId: string } }
  | {
      type: "UPDATE_CART_ITEM";
      payload: { productId: string; quantity: number };
    }
  | { type: "CLEAR_CART" }
  | { type: "CREATE_ORDER_REQUEST" }
  | { type: "CREATE_ORDER_SUCCESS"; payload: Order }
  | { type: "CREATE_ORDER_FAILURE"; payload: string }
  | {
      type: "UPDATE_ORDER_STATUS";
      payload: { orderId: string; status: Order["status"] };
    };

const initialState: OrderState = {
  cart: [],
  currentOrder: null,
  pendingOrders: [],
  orderHistory: [],
  isLoading: false,
  error: null,
};

const orderReducer = (state: OrderState, action: OrderAction): OrderState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, quantity } = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex !== -1) {
        // Item already exists, update quantity
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + quantity,
        };
        return { ...state, cart: updatedCart };
      } else {
        // Add new item
        return { ...state, cart: [...state.cart, { product, quantity }] };
      }
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.product.id !== action.payload.productId
        ),
      };

    case "UPDATE_CART_ITEM": {
      const { productId, quantity } = action.payload;
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        ),
      };
    }

    case "CLEAR_CART":
      return { ...state, cart: [] };

    case "CREATE_ORDER_REQUEST":
      return { ...state, isLoading: true, error: null };

    case "CREATE_ORDER_SUCCESS":
      return {
        ...state,
        cart: [],
        currentOrder: action.payload,
        pendingOrders: [...state.pendingOrders, action.payload],
        isLoading: false,
      };

    case "CREATE_ORDER_FAILURE":
      return { ...state, isLoading: false, error: action.payload };

    case "UPDATE_ORDER_STATUS": {
      const { orderId, status } = action.payload;
      const updatedPendingOrders = state.pendingOrders.filter(
        (order) => order.id !== orderId
      );

      // If order is completed or cancelled, move to history
      if (status === "delivered" || status === "cancelled") {
        const orderToUpdate = state.pendingOrders.find(
          (order) => order.id === orderId
        );
        if (orderToUpdate) {
          const updatedOrder = {
            ...orderToUpdate,
            status,
            updatedAt: new Date(),
          };
          return {
            ...state,
            pendingOrders: updatedPendingOrders,
            orderHistory: [...state.orderHistory, updatedOrder],
            currentOrder:
              state.currentOrder?.id === orderId ? null : state.currentOrder,
          };
        }
      }

      // Otherwise just update the status
      return {
        ...state,
        pendingOrders: state.pendingOrders.map((order) =>
          order.id === orderId
            ? { ...order, status, updatedAt: new Date() }
            : order
        ),
        currentOrder:
          state.currentOrder?.id === orderId
            ? { ...state.currentOrder, status, updatedAt: new Date() }
            : state.currentOrder,
      };
    }

    default:
      return state;
  }
};

// Create context
interface OrderContextType extends OrderState {
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartItem: (productId: string, quantity: number) => void;
  clearCart: () => void;
  placeOrder: (address: any, paymentMethod: string) => Promise<void>;
  getCartTotal: () => number;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

// Provider component
export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(orderReducer, initialState);

  // Calculate cart total
  const getCartTotal = (): number => {
    return state.cart.reduce((total, item) => {
      const price = item.product.discountPrice || item.product.price;
      return total + price * item.quantity;
    }, 0);
  };

  // Add to cart
  const addToCart = (product: Product, quantity: number) => {
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity } });
  };

  // Remove from cart
  const removeFromCart = (productId: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { productId } });
  };

  // Update cart item
  const updateCartItem = (productId: string, quantity: number) => {
    dispatch({ type: "UPDATE_CART_ITEM", payload: { productId, quantity } });
  };

  // Clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // Place order - First to Accept implementation
  const placeOrder = async (address: any, paymentMethod: string) => {
    try {
      // Mark as loading
      dispatch({ type: "CREATE_ORDER_REQUEST" });

      // In a real app, this would be an API call to your backend
      // which would then broadcast the order to nearby stores

      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Create a new order
      const newOrder: Order = {
        id: `order-${Date.now()}`,
        userId: "user123", // Would come from auth context
        items: [...state.cart],
        totalAmount: getCartTotal(),
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
        address,
        paymentMethod,
      };

      // Simulate First-to-Accept process
      // In real implementation, this would be handled by your backend
      simulateFirstToAccept(newOrder);

      // Update state with new order
      dispatch({ type: "CREATE_ORDER_SUCCESS", payload: newOrder });

      return Promise.resolve();
    } catch (error) {
      dispatch({
        type: "CREATE_ORDER_FAILURE",
        payload: "Failed to place order",
      });
      return Promise.reject(error);
    }
  };

  // Simulate First-to-Accept process
  const simulateFirstToAccept = (order: Order) => {
    // Simulate a store accepting the order after a random delay (2-5 seconds)
    const acceptDelay = Math.floor(Math.random() * 3000) + 2000;

    setTimeout(() => {
      dispatch({
        type: "UPDATE_ORDER_STATUS",
        payload: { orderId: order.id, status: "confirmed" },
      });

      // Then simulate order being prepared
      setTimeout(() => {
        dispatch({
          type: "UPDATE_ORDER_STATUS",
          payload: { orderId: order.id, status: "shipped" },
        });

        // Finally, simulate delivery
        setTimeout(() => {
          dispatch({
            type: "UPDATE_ORDER_STATUS",
            payload: { orderId: order.id, status: "delivered" },
          });
        }, 5000);
      }, 5000);
    }, acceptDelay);
  };

  return (
    <OrderContext.Provider
      value={{
        ...state,
        addToCart,
        removeFromCart,
        updateCartItem,
        clearCart,
        placeOrder,
        getCartTotal,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

// Custom hook to use the context
export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
};
