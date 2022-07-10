import React from 'react';

import { Card } from '../card';
import { withGlobalState } from '../hocs/withGlobalState';

class CardListNoState extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
        this.state = {
            orderBy: 'desc'
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        this.setState({
            orderBy: event.target.value
        });
    }

    render() {
        const { orderBy } = this.state;
        const citiesList = this.props.state.citiesList.sort();
        const sortedCitiesList = orderBy === 'asc' ? citiesList : citiesList.reverse();

        return (
            <div>
                <select className='Select' value={orderBy} onChange={this.handleOnChange}>
                    <option value='desc'>By name desc</option>
                    <option value='asc'>By name asc</option>
                </select>
                <div className='CardList'>
                    {
                        sortedCitiesList.map((city, index) => <Card key={index} city={city} />)
                    }
                </div>
            </div>
        );
    }
}

export const CardList = withGlobalState(CardListNoState);
