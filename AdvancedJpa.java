// 30 Sept 2k25


// Locking in JPA

public class AdvancedJpa { }

@Entity
public class Account{
    @Id
    @GeneratedValue
    private Long id;
    private Double balance;

    @Version // optimistic locking -> OptimisticLockException
    private Long version; // required for optimistic locking


    Account account = em.find(Account.class, 1L, LockModeType.PESSIMISTIC_WRITE); // passimistic locking
}

@Transactional
public void updateBalance(Long accountId, Double amount){
    Account account = accountRepo.findById(accountId).orElseThrow();
    account.setBalance(account.getBalance() - amount);
    accountRepo.save(account); // version checked automatically
}

@Transactional
public void updataBalance(Long accountId, Double amount){
    Account account = em.find(Account.class, accountId, LockModeType.PESSIMISTIC_WRITE);
    account.setBalance(account.getBalance() - amount);
    em.persist(account);
}

