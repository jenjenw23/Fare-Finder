// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newUser = {
          name: $("#InputName").val().trim(),
          email: $("#InputEmail").val().trim(),
          password: $("#InputPassword").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/users", {
          type: "POST",
          data: newUser
        }).then(
          function() {
            //console.log("created new user");
            // go to hompage 
            location.assign("/"); 
          }
        );
      });

      $(".delete-user").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/users/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted user", id);
            // Reload the page to get the updated list
            location.assign("/admin");            
          }
        );
      });
});
