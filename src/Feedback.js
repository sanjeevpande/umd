import React, { Component } from 'react';
import Button from '@atlaskit/button';
import InlineDialog from '@atlaskit/inline-dialog';
class Feedback extends Component {
	constructor(props){
    super(props);
    this.state={
      dialogOpen:false
    }
    this.loadPerticularPage = this.loadPerticularPage.bind(this);
  }
  loadPerticularPage(key){
    const documentationLctn= "https://zephyrdocs.atlassian.net/wiki/spaces/ZFJCLOUD/overview";
    const supportLctn="https://support.smartbear.com/message/?prod=zephyr";
    const voteonfeaturesLcnt="https://trello.com/b/7BzImY5B/zephyr-for-jira-cloud";
    const feedbackLctn="https://www.getzephyr.com/products/zephyr-for-jira/feedback";
    const changedLocation = (key ==="feedback") ? feedbackLctn :(key ==="support") ? supportLctn: (key ==="vote") ? voteonfeaturesLcnt: documentationLctn;
    // window.open(changedLocation, '_parent');
    window.open(changedLocation, '_blank');
  }
  render() {
    const dialogContent = (
      <div className="dialogue-options">
      <Button appearance="subtle-link" className="text-decoration-none" onClick={()=>this.loadPerticularPage('documentation')}>Documentation</Button>
      <Button appearance="subtle-link" className="text-decoration-none" onClick={()=>this.loadPerticularPage('support')}>Support</Button>
      <Button appearance="subtle-link" className="text-decoration-none" onClick={()=>this.loadPerticularPage('vote')}>Vote on features</Button>
      </div>
  );
    return (
      <div className="feedback">
        <Button appearance="subtle" className="text-decoration-none" onClick={()=>this.loadPerticularPage('feedback')}>
              <img src="https://prod-play.zephyr4jiracloud.com/connect/assets/images/icons/zephyr_feather_100x100.png" className="zephyr-icon"/>  Give Feedback
            </Button>
            <div className="splitter"></div>
          <InlineDialog content={dialogContent} isOpen={this.state.dialogOpen} placement="bottom-end"  onClose={() => {this.setState({ dialogOpen: false })}}>
          <Button onClick={() => {this.setState({ dialogOpen: !this.state.dialogOpen })}} appearance="subtle" className="help-button" >Help</Button>
        </InlineDialog>
      </div>
    );
  }
}

export default Feedback;
