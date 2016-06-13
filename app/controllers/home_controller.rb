class HomeController < ApplicationController
  def home
  	@contact = Contact.new
    @posts = Post.all.last(2)
  end

  def about;end
end
