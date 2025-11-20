package kafka.model5;

import kafka.model2.OrderEvent;

@Configuration
public class Configure {
    
    @Bean 
    public KStream<String, OrderEvent> orderStream(StreamsBuilder builder){
        KStream<String, orderEvent> stream = builder
            .stream("order-events", Consumed.with(Serdes.String(), new JsonSerde<>(OrderEvent.class)));

        stream.groupBy((key, value) -> value.getStatus())
            .count()
            .toStream()
            .to("order-status-counts", Produced.with(Serdes.String(), Serdes.Long()));

        return stream;
    }
}
