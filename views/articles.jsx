const React = require('react');

class Articles extends React.Component {
	render() {
		return <div>
			<header>
				<h1 class="site-header__logo">News</h1>
			</header>
			<div class="site-content">
			Hello {this.props.name}
				<h2 class="page-title">Last article</h2>
				<ul class="article-list">
				{this.props.articles.map((article, index) => {
					return <li class="article-list__item" key={index}>
							<h2 class="article-list__item__title">{article.title}</h2>
							 <p class="article-list__item__description">{article.description}</p>
            				<a class="article-list__item__link" href={article.link}>Read more...</a>
            				<img class="article-list__item__image" src='../uploads/{article.imageHash}' alt='alt' />
            				<span class="article-list__item__author">{article.author}</span>
            				<span class="article-list__item__date">{article.creation_date.toString()}</span>
						</li>
				})}
				</ul>
			</div>
		</div>
	}
}

module.exports = Articles;
