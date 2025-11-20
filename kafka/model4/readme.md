**Kafka Transactions (Atomic processing chain)**

* read message
* process logic
* publish output
* commit offset

everything succeeds or everything rolls back.

payments, ledger systems, banking pipelines use exactly this.