export default function topButtons(){
    return (
        <div className="row toolbar">
                <div className="col-9">
                    <div className="row">
                        <div className="col-9">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-success btn-sm btn-play"><i className="fas fa-play"></i> Play</button>
                                <button type="button" className="btn btn-success btn-sm btn-step"><i className="fas fa-step-forward"></i> Step</button>
                                <button type="button" className="btn btn-success btn-sm btn-stop" disabled><i className="fas fa-stop"></i> Stop</button>
                                <button type="button" className="btn btn-success btn-sm btn-restart"><i className="fas fa-redo"></i> Restart</button>
                            </div>
                        </div>
                        <div className="col-3">
                            
                        </div>
                    </div>
                </div>
                <div className="col-3">
                </div>
            </div>
        
    )
}