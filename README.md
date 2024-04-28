# AngularHeaderSIdebarProject
This project will have the angualr sidebar and header and main content dashboard


Angular practice

If app-routing.module.ts and app.module.ts files are missing then
ng new MyProj --no-standalone --routing --ssr=false


We may use a flag -open( or simply -o) which will automatically open our browser on
ng serve --open



as local host is not working (http to https)
ng serve --ssl --port 4200  --open


Toastr
npm install ngx-toastr


FontAwesome
ng add @fortawesome/angular-fontawesome@<version>

https://www.geeksforgeeks.org/how-to-use-fontawesome-icons-in-angular-application/ -- use this guide 


Extensions
-- code snap
-- material theme
-- peacock



For CORS related issue
do this in Program.cs above      app.UseHttpsRedirection(); 

like this

  app.UseCors(x => x
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());

        app.UseHttpsRedirection(); 


---Word Wrap in Visual Studio 2022
Open Visual Studio.
Go to "Tools" > "Options".
In the Options dialog, navigate to "Text Editor" > "All Languages" > "General".
Check the box next to "Word wrap".
