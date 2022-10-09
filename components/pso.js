

export class Particle{

    constructor(dim = 2){
        this.dim = dim;

        this.X = [];
        this.V = [];

        for(var i=0;i<dim;i++){
            this.X.push(Math.random()*(10)-5);
            this.V.push(this.X[i]*this.X[i]);
        }

        this.Vbest = this.V;
        this.Xbest = this.X;
    }

    updateFitness(){
        if(this.fitness() < this.Vbest){
            this.Vbest = V;
            this.Xbest = X;
        }
    }

    fitness(){
        return this.V[0]+this.V[1];
    }

};