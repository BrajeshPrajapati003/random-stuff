**Kafka Streams (real-time aggregation)**

example: count orders per status.

* reads events from order-events
* groups by status (CREATED, CANCELLED, SHIPPED)
* counts
* writes real-time output into order-status-counts

