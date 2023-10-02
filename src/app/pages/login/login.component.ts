import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formData: any = {};

  onSubmit() {
    try {
      const jsonData = {
        matricula: this.formData.matricula,
        senha: this.formData.senha,
      };

      fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify(jsonData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.code === 200) {
            // Login successful
            localStorage.setItem('user_chave', JSON.stringify(data.nome)); // Store user info
            localStorage.setItem('token', JSON.stringify(data.token)); // Store user info
            alert('Login realizado com sucesso!');
            // Redirect to the dashboard page (you might need to adjust this URL)
            window.location.href = '/dashboard';
          } else {
            // Handle error
            alert(data.mensage);
          }
        })
        .catch(() => {
          // Handle fetch error
          alert('Erro ao fazer login!');
        });
    } catch (error) {
      console.error(error);
      alert('Erro ao fazer login!');
    }
  }
}
