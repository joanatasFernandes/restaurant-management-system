import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Mesa {

    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String numero;
    private String descricao;

}
