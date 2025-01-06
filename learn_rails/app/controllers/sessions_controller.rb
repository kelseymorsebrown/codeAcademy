class SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_email(params[:session][:email])
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      redirect_to '/newsstand', allow_other_host: true
    else
      redirect_to '/newsstand/login', allow_other_host: true
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/newsstand'
  end
end
