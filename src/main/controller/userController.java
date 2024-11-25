
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UserController {

    @GetMapping("/users/new")
    public String createUserForm(Model model) {
        model.addAttribute("user", new User()); // Adiciona um objeto vazio para o formulário
        return "user-form"; // Nome do template HTML em src/main/resources/templates/
    }
}

}
