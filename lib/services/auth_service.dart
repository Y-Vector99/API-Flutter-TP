import 'dart:convert';
import 'dart:async';
import 'package:http/http.dart' as http;

class AuthService {
  // URL de l'API de votre backend
  final String apiUrl = "http://192.168.1.13/login"; // Assurez-vous que l'URL est correcte

  // Méthode de connexion
  Future<Map<String, dynamic>?> login(String email, String password) async {
    // Construire le corps de la requête
    Map<String, String> requestBody = {
      'email': email,
      'password': password,
    };

    try {
      // Envoi de la requête POST à l'API avec timeout
      final response = await http
          .post(
        Uri.parse(apiUrl),
        headers: {"Content-Type": "application/json"},
        body: json.encode(requestBody),
      )
          .timeout(
        Duration(seconds: 10), // Timeout après 10 secondes
        onTimeout: () {
          // Action à prendre si la requête dépasse le délai imparti
          throw TimeoutException('La requête a pris trop de temps.');
        },
      );

      // Vérification de la réponse
      if (response.statusCode == 200) {
        // Si la connexion est réussie, retourner les informations utilisateur
        return json.decode(response.body);
      } else {
        // Si la connexion échoue, retourner null
        return null;
      }
    } on TimeoutException catch (_) {
      // En cas de timeout, retourner un message d'erreur
      print("Erreur: Timeout de la requête");
      return null;
    } catch (e) {
      // En cas d'autres erreurs (par exemple problèmes réseau), retourner null
      print("Erreur inconnue: $e");
      return null;
    }
  }
}
