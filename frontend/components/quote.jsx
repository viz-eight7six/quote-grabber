import React from 'react';

class Quote extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.getQuote();
  }

  render() {
    let quote, display;
    if (this.props.quote.quote_line){
      quote = JSON.parse(this.props.quote.quote_line)[0];
      display = <div>
              <div>{quote.content}</div>
              <div>{quote.title}</div>
          </div>;
      console.log(quote);
    }
    return(
      <section className="quote-container">
        {display}
      </section>
    );
  }
}

export default Quote;
