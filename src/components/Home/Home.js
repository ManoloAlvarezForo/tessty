import React from 'react';

const numberList = [
    50, 250, 335, 1, 3, 669, 25
]

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            objectList: [
                { title: 'Example 1', body: 'Description for example 1' },
                { title: 'Example 2', body: 'Description for example 2' },
                { title: 'Example 3', body: 'Description for example 3' }]
        }
    }

    _addElement = () => {
        const newList = this.state.objectList.concat([{ title: this.state.title, body: this.state.body }]);
        this.setState({
            objectList: newList
        })
    }

    _removeElement = (elementToDelete) => {
        const newList = this.state.objectList.filter(element => element !== elementToDelete);
        this.setState({
            objectList: newList
        })
    }

    render() {
        const { title, body } = this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{height: '64px', borderWidth: '1px', borderColor: 'width', borderStyle: 'solid', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'}}>
                    header
                </div>
                <div className="gradient-bc" style={{ display: 'flex', flexDirection: 'row', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ margin: '0 20px' }}>
                        <h1 style={{ color: '#ffff', textAlign: 'center', fontFamily: 'monospace', fontSize: '40px' }}>React List</h1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {
                            this.state.objectList.map((value, index) =>
                                <div key={index} style={{ display: 'flex', flexDirection: 'row', borderRadius: '5px', border: '1px solid #f1ecec', margin: '5px', padding: '10px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
                                        <div style={{ color: '#ffff', fontWeight: 'bold', fontSize: '18px' }}>{value.title}</div>
                                        <section style={{ color: '#ffff' }}>{value.body}</section>
                                    </div>
                                    <div style={{ marginLeft: 'auto' }}>
                                        <button onClick={() => this._removeElement(value)} style={{ borderStyle: 'none', backgroundColor: '#4a4347', color: '#ffff', borderRadius: '5px', height: '25px', fontSize: '15px' }}>X</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="inputSeparation" style={{ display: 'flex', flexDirection: 'column', margin: '50px', width: '300px' }}>
                        <h2 style={{ color: '#ffff', textAlign: 'center' }}>Add Element</h2>
                        <input value={title} type="text" placeholder="Title" onChange={e => this.setState({ title: e.target.value })} />
                        <input value={body} type="text" placeholder="Body" onChange={e => this.setState({ body: e.target.value })} />
                        <button style={{ borderStyle: 'none', backgroundColor: '#4a4347', color: '#ffff', borderRadius: '5px', height: '50px', fontSize: '18px' }} onClick={this._addElement}>Add</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;