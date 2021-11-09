export class ProductsModel{
    constructor(pid:number,pname:string,pprice:number){
        this.prodid=pid;
        this.prodname=pname;
        this.prodprice=pprice;
        console.log(this.prodid);
        console.log(this.prodname);
        console.log(this.prodprice);
    }
    _prodid:number=0;
    public get prodid() : number {
        return this._prodid;
    }
    public set prodid(v : number) {
        this._prodid = v;
    }
    _prodname:string="";
    public get prodname() : string {
        return this._prodname;
    }
    public set prodname(v : string) {
        this._prodname = v;
    }
    _prodprice:number=0;
    public get prodprice() : number {
        return this._prodprice;
    }
    public set prodprice(v : number) {
        this._prodprice = v;
    }
    
}