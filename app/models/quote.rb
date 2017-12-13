require 'rest-client'


class Quote < ApplicationRecord
  attr_accessor :quote


  def getQuote()
    response = RestClient.get 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
    @qoute = response
  end


end
