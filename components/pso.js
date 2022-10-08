

var coordinates = [];

const data = {
  labels: ['Scatter'],
  datasets: [
    {
      label: 'PSO dataset',
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.4)',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 5,
      pointHoverRadius: 10,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: coordinates,
    }
  ]
};



class Particle{

    constructor(dim = 2,minx,maxx){
        this.dim = dim;

        this.X = [];
        this.V = [];

        for(var i=0;i<dim;i++){
            X[i]=Math.random()*(2*Math.PI);
            V[i]=Math.sin(X[i]);
        }

        this.Vbest = X;
        this.Xbest = V;
    }

    updateFitness(){
        if(fitness() < this.Vbest){
            this.Vbest = X;
            this.Xbest = V;
        }
    }

    fitness(){
        return V[0]+V[1];
    }

};



function PSO(){
     const c1=2.05;
     const c2=2.05;
     var r1=Math.random();
     var r2=Math.random();
     const w=0.4;
     const population=population;
     const dim = 2
     var particles=[];
     const maxItr=100;

    for(var i=0;i<population;i++){
        this.particles.push(new Particle());
        coordinates.push({x:particles[i].V[0] , y:particles[i].V[1]});
    }


    var Xbest = this.particles[0].Xbest;
    var Vbest = this.particles[0].Vbest;

    for(var i=0;i<population;i++){
        if(Vbest < particles[i].Vbest){
            Vbest=particles[i].Vbest;
            Xbest=particles[i].Xbest;
        }
    }

    var itr=0;
    while(itr<maxItr){
        for(var i=0;i<population;i++){
            for(var j=0;j<dim;j++){
                r1=Math.random();
                r2=Math.random();

                particles[i].V[j] = (w*particles[i].V[j]  +  c1*r1*(particles[i].Xbest[j]-particles[i].X[j])  +  c2*r2*(Xbest[j]-particles[i].X[j])); 

                if(particles[i].V[j] < minx){
                    particles[i].V[j] = minx;
                }
                else if(particles[i].V[j] > maxx){
                    particles[i].V[j] = maxx;
                }
            }
            coordinates[i] = ({x:particles[i].V[0] , y:particles[i].V[1]});
            for(var j=0;j<dim;j++){
                particles[i].X[j]+=particles[i].V[j];
            }
            particles[i].updateFitness();
            if(Vbest < particles[i].Vbest){
                Vbest=particles[i].Vbest;
                Xbest=particles[i].Xbest;
            }
        }
        itr++;
    }

    return Xbest;
}