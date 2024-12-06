class ArticlesController < ApplicationController

  before_action :require_user, only: [:new, :create, :show, :edit, :update, :destroy]

  # TODO
  # After a user is logged in, he/she shouldn’t be able to see the signup page (http://localhost:4001/signup) 
  # or the login page (http://localhost:4001/login). 
  # Instead if he/she tries to visit either page, he/she should get redirected to the articles index page (http://localhost:4001/). 
  # Similar to how we required logged in users to view individual articles, require logged out users to view the signup and login pages.

  def index
    @articles = Article.all
  end
 
  def show
    @article = Article.find(params[:id])
  end
 
  def new
    @article = Article.new
  end
 
  def create
    @article = Article.new(article_params)
 
    if @article.save
      redirect_to @article
    else
      render 'new'
    end
  end
 
  def edit
    @article = Article.find(params[:id])
  end

  def update
    @article = Article.find(params[:id])
 
    if @article.update(article_params)
      redirect_to @article
    else
      render 'edit'
    end
  end
 
  def destroy
    @article = Article.find(params[:id])
    @article.destroy
 
    redirect_to articles_path
  end
 
  private
    def article_params
      params.require(:article).permit(:title, :author, :body)
    end
end
