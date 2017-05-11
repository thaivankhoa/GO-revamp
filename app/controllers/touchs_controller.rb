class TouchsController < ApplicationController
  def new
    @touch = Touch.new
  end

  def create
    @touch = Touch.new(params[:contact])
    @touch.request = request
    if @touch.deliver
      flash.now[:error] = nil
      flash.now[:notice] = 'Thank for your message!'
    else
      flash.now[:error] = 'Cannot send message.'
      redirect_to root_path
    end
  end
end
