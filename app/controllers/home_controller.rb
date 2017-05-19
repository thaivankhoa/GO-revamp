class HomeController < ApplicationController
  def home
  	@contact = Contact.new
    @posts = Post.all.last(2)
    @firstPost = @posts.first
    @lastPost = @posts.last if @posts.count > 1
  end

  def about;end

  def amp
      render layou: 'amp'
  end
end
