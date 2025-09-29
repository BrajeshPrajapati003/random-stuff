package scenario2.dto;

import java.util.List;

import scenario2.entity.OrderItem;

public class OrderRequestDTO {
    private Long customerId;
    private List<OrderItem> items;

    public static class OrderItemDTO{
        private Long productId;
        private int quantity;

        // Getters and Setters
    }

    // Getters and Setters
}
