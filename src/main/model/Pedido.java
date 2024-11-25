import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Pedido {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;

    @OneToOne
    private Mesa Mesa;

    @ManyToOne
    private Produto Produto;

    private int quantidade;

    public BigDecimal getTotal(){
        return Produto.getPreco().multiply(BigDecimal.valueOf(quantidade));
    }
}
