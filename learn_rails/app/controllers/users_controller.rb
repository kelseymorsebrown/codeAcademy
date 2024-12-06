class UsersController < ApplicationController

  # TODO
  # Add a profile page that shows the current user’s first name, last name and email.
  # Require that a user be logged in to access the profile page.
  # Also, update the nav items to show a “Profile” link if a user is logged in.
  # Let a logged in user modify his/her profile page.
  # In other words, let the current user edit and update his/her first name, last name, and email through the profile page.

  def new
    @user = User.new
  end

  def create 
    @user = User.new(user_params) 
    if @user.save 
      session[:user_id] = @user.id 
      redirect_to '/newsstand'

      puts session[:user_id]
    else 
      redirect_to '/newsstand/signup' 
    end 
  end 
  
  private
    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password)
    end

end
