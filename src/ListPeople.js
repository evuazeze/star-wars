import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class ListPeople extends Component {
    static propTypes = {
        people: PropTypes.array.isRequired
    }

    render() {
        const {people} = this.props;

        return (
            <div className='list-contacts'>
                <ol className='contact-list'>
                    {people.map(person => (
                        <Link
                            to='/hello'
                            key={person.name}
                            style={{
                                textDecoration: 'none',
                                color: '#000'
                            }}
                        >
                            <li className='contact-list-item'>
                                <div
                                    className='contact-avatar'
                                    style={{
                                        backgroundImage: `url(/images/person.svg)`
                                    }}
                                ></div>
                                <div className='contact-details'>
                                    <p>{person.name}</p>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ol>
            </div>
        )
    }
}

export default ListPeople