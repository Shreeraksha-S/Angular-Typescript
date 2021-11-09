export class CustomerModel{
    constructor(cid:number,cname:string,ccity:string){
        this.custid=cid;
        this.custname=cname;
        this.custcity=ccity;
        console.log(this.custid);
        console.log(this.custname);
        console.log(this.custcity);
    }
    
    _custid : number=0;
    public get custid() : number {
        return this._custid;
    }
    public set custid(v : number) {
        this._custid = v;
    }
    
     _custname : string='';
    public get custname() : string {
        return this._custname;
    }
    public set custname(v : string) {
        this._custname = v;
    }
    
    _custcity : string='';
    public get custcity() : string {
        return this._custcity;
    }
    public set custcity(v : string) {
        this._custcity = v;
    }
    
    
    
}