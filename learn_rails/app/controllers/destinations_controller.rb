class DestinationsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def show
    @destination = Destination.find(params[:id])
  end

  def edit 
    @destination = Destination.find(params[:id]) 
  end

  def update
    @destination = Destination.find(params[:id])
    if @destination.update(destination_params)
      redirect_to(action: 'show', id: @destination.id)
    else
      render 'edit'
    end
  end

  private
  def destination_params
    params.require(:destination).permit(:name, :description)
  end
end
