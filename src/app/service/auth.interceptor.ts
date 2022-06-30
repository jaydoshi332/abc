import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {LoginService} from "./login.service";


 // const TOKEN_HEADER='Authorization'
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
   constructor(private loginService:LoginService) {
   }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add the jwt token (localstorage) request
   let authReq=req;
    const token=this.loginService.getToken();
    console.warn("Inside Interceptor");
    if(token!=null){
    authReq=authReq.clone({
      setHeaders: {Authorization: `Bearer ${token}`},
    });
    }
    return next.handle(authReq)
  }

}
export const authInterceptorProvider=[
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true,
  },
];
