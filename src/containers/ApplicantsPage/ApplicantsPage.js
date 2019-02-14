import React from 'react'
import Applicants from '../../components/Applicants/Applicants';

class ApplicantsPage extends React.Component {
    componentDidMount() {
        this.props.changeTitle('Applicants')
    }
    render() {
        return (
            <Applicants setAdditionalComponent={this.props.context.setAdditionalComponent} title="Applicants" />
        )
    }
}

export default ApplicantsPage;