

export default function rightTable(){
    return (
        <div className="card">
                        <div className="card-header">Settings</div>
                        <div className="card-body">
                            <form className="form-optimize">
                                <div className="form-group">
                                    <label for="population-size">Population Size</label>
                                    <input type="number" id="population-size" className="form-control form-control-sm create-particles-on-change settings" required min="10" max="1000" step="1" value="40" autocomplete="off"/>
                                </div>
                                
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label for="param-c1">C1</label>
                                            <input type="number" id="param-c1" className="form-control form-control-sm change-parameters" required min="0.0" max="5" step="0.01" value="1.4" autocomplete="off"/>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label for="param-c1">C2</label>
                                            <input type="number" id="param-c2" className="form-control form-control-sm change-parameters" required min="0.0" max="5" step="0.01" value="1.4" autocomplete="off"/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="form-group">
                                    <label for="position-initialization">Position Initialization</label>
                                    <select className="form-control form-control-sm settings create-particles-on-change" id="position-initialization">
                                        <option value="fixed-value-initialization">Fixed Value [v=0]</option>
                                        <option value="random-initialization">Random [0,1]</option>
                                        <option selected value="problem-range-initialization">Problem Range</option>
                                        <option value="uniformly-initialization">Uniformly</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="velocity-initialization">Velocity Initialization</label>
                                    <select className="form-control form-control-sm settings dispatch-velocity-initialization should-fire-init" id="velocity-initialization">
                                        <option selected value="fixed-value-initialization">Fixed Value [v=0]</option>
                                        <option value="random-initialization">Random [0,1]</option>
                                        <option value="problem-range-initialization">Problem Range</option>
                                        <option value="uniformly-initialization">Uniformly</option>
                                    </select>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input settings change-parameters" id="keep-problems-range" checked />
                                    <label className="form-check-label" for="keep-problems-range">Keep Problem's Range</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input settings change-parameters" id="change-velocity" />
                                    <label className="form-check-label" for="change-velocity">Change Velocity</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input settings change-parameters" id="decrease-inertia" checked />
                                    <label className="form-check-label" for="decrease-inertia">Decrease Inertia</label>
                                </div>
                            </form>
                        </div>
                    </div>
    )
}