describe ("a Suite", function(){

     it("should have called the alert function if submit button is clicked", function(){
            spyOn(window, "alert");
            
            expect(window.alert).toHaveBeenCalledWith("message");
        });
});