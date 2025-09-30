public class hibernate2 {
 
    Session session = null;
    Transaction tx = null;

    try{
        session = factory.openSession();
        tx = session.beginTransaction();

        tx.commit();
    }catch(HibernateException e){
        if(tx != null) tx.rollback();
        e.printStackTrace();
    }finally{
        if(session != null) session.close();
    }

}