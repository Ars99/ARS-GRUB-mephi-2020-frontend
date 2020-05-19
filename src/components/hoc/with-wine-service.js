import React from 'react';
import WineServiceContext from '../wine-service-context';

const WithWineService = () => (Wrapped) => {
    return (props) => {
        return (
            <WineServiceContext.Consumer>
                {
                    (WineService) => {
                        return <Wrapped {...props} WineService={WineService} />
                    }
                }
            </WineServiceContext.Consumer>
        )
    }
};

export default WithWineService;