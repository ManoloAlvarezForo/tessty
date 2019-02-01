import React from 'react'
import ApplicantList from './ApplicantList';
import ApplicantDialogDetail from './ApplicantDialogDetail';
import ApplicantDialogContent from './ApplicantDialogContent';
import ApplicantsToolBar from './ApplicantsToolBar';
import CustomSnackBar from '../SnackBar/CustomSnackBar';

class ApplicantsContainer extends React.Component {

    state = {
        detail: false,
        content: false,
        snackBar: false,
        snackBarCurrentVariant: '',
        snackBarCurrentMessage: '',
        snackBarUpdatedMessage: 'Applicant was updated successfully.',
        snackBarAddedMessage: 'Applicant was added successfully.',
        applicantSelectedId: '',
    }

    actionSelected = (applicantSelectedId) => {
        this.setState({
            detail: true,
            applicantSelectedId: applicantSelectedId
        })
    }

    _handleDialog = (property, value) => {
        this.setState({
            [property]: value
        })
    }

    _setValues = (property, value) => {
        this.setState({
            [property]: value
        })
    }

    _setSnackBar = (variant, message) => {
        this.setState({
            snackBarCurrentVariant: variant,
            snackBarCurrentMessage: this.state[message] || 'Error to show a message.'
        })
    }

    _clearApplicantSelectedId = () => {
        this.setState({
            applicantSelectedId: ''
        })
    }

    render() {
        return (
            <React.Fragment>
                <ApplicantsToolBar title={"Applicants"} openDialog={this._handleDialog} />
                <div style={{ overflow: 'auto', height: 'calc(100vh - 65px)' }}>
                    <div style={{ margin: '0 10px' }}>
                        <ApplicantList selectedAction={this.actionSelected} list={this.props.applicants} />
                        <React.Fragment>
                            <ApplicantDialogDetail
                                isEnabled={this.state.detail}
                                handleDialog={this._handleDialog}
                                applicantSelectedId={this.state.applicantSelectedId}
                                clearApplicantSelectedId={this._clearApplicantSelectedId}
                            />
                            <ApplicantDialogContent
                                isEnabled={this.state.content}
                                handleDialog={this._handleDialog}
                                applicantSelectedId={this.state.applicantSelectedId}
                                clearApplicantSelectedId={this._clearApplicantSelectedId}
                                setValue={this._setValues}
                                setSnackBar={this._setSnackBar}
                            />
                        </React.Fragment>
                    </div>
                    <CustomSnackBar 
                        openSnackBar={this.state.snackBar} 
                        variant={this.state.snackBarCurrentVariant}
                        message={this.state.snackBarCurrentMessage}
                        handleClose={() => this._setValues('snackBar', false)} 
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default ApplicantsContainer