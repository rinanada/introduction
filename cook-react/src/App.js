import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      comment: [
        { title: 'すいーとぽてと' } ,
        { title: '秋だね' } ,
        { title: 'こげてる' }
      ]
    };
    this.addComment = this.addComment.bind(this);
  }

  //新規追加
  addComment(){
    //追加
    this.state.comment.push({
      title: this.refs.newText.value
    });

    //保存
    this.setState({
      todo : this.state.comment
    });

    //初期化
    this.refs.newText.value = '';
  }

  //削除機能
  deleteComment(i){
    //削除
    this.state.comment.splice(i ,1);
    //保存
    this.setState({
      todo : this.state.comment
    });

  }
  render() {
    return (
      <div className="App">
        <div className="App-image">
          <img src="2012-12-01 14.42.02.jpg" width="220" height="220" />
        </div>
        <h3 className="App-title">コメントする</h3>
        <ul className="App-list">
          {this.state.comment.map((comment, i)=>{
            return <li key={i}><input type="button" value="☓" onClick={() => this.deleteComment(i)}/> {comment.title}</li>
          })}
        </ul>
        <input type="text"  ref="newText"/>
        <input type="button" value="追加" onClick={this.addComment} />
      </div>


    );
  }
}

export default App;
