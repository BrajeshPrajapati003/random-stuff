package scenario2.repository;

import com.scenario2.entity.Customer;
import com.scenario2.entity.Order;
import com.scenario2.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public class OrderRepository extends JpaRepository<Order, Long> {
    
}
