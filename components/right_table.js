

export default function rightTable(){
    var cx = "-5<=x,y<=5";
    return (
        <div className="card">
                        <div className="card-header">Configuration(To be implemented)</div>
                        <div className="card-body">
                            <form className="form-optimize">
                                <div className="form-group">
                                    <label for="population-size">Population Size</label>
                                    <input type="number" id="population-size" className="form-control form-control-sm create-particles-on-change settings" required min="10" max="1000" step="1" value="40" autocomplete="off"/>
                                </div>
                                
                                <div className="row">
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label for="param-c1">C1</label>
                                            <input type="number" id="param-c1" className="form-control form-control-sm change-parameters" required min="0.0" max="5" step="0.01" value="2.05" autocomplete="off"/>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label for="param-c1">C2</label>
                                            <input type="number" id="param-c2" className="form-control form-control-sm change-parameters" required min="0.0" max="5" step="0.01" value="2.05" autocomplete="off"/>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label for="param-w">w</label>
                                            <input type="number" id="param-w" className="form-control form-control-sm change-parameters" required min="0.0" max="1" step="0.01" value="0.4" autocomplete="off"/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label for="position-initialization">Function</label>
                                    <select className="form-control form-control-sm settings create-particles-on-change" id="position-initialization">
                                        <option value="Sphere">Circle(x^2+y^2)</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="constraints">Constraints</label>
                                    <select className="form-control form-control-sm settings dispatch-velocity-initialization should-fire-init" id="velocity-initialization">
                                        <option selected value="constraint">{cx}</option>
                                    </select> 
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioMinimization" checked/>
                                    <label class="form-check-label" for="flexRadioMinimization">
                                        Minimization
                                    </label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioMaximization" />
                                    <label class="form-check-label" for="flexRadioMaximization">
                                        Maximization
                                    </label>
                                </div>
                            </form>
                            <div className="row toolbar">
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-9">
                                        <div className="btn-group" >
                                            <button type="button" className="btn btn-success btn-sm btn-stop" disabled><i className="fas fa-stop"></i>Optimize</button>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        
                                    </div>
                                </div>
                            </div>
            </div>
                        </div>
                    </div>
    )
}