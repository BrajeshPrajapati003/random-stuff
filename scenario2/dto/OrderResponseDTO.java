package scenario2.dto;

import java.util.List;

public class OrderResponseDTO {
    private Long orderId;
    private String customerName;
    private String email;
    private List<ItemDetail> items;

    public static class ItemDetail{
        private String productName;
        private int quantity;
        private double price;

        // Getters and Setters
    }

    // Getters and Setters
}
