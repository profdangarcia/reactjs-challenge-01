import React, { Component } from 'react';

import PostItem from '../PostItem/PostItem';

import './PostList.css';

class PostList extends Component{
  
  state = {
    posts: [
      {
        'id': 1,
        'user': 'Júlio Alcantara',
        'date': '04 Jun 2019',
        'user_avatar': 'https://i.pravatar.cc/150?img=1',
        'post_content': 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        'comments': [
          {
            'id': 1,
            'user': 'Diego Fernandes',
            'user_avatar': 'https://i.pravatar.cc/150?img=1',
            'comment_content': 'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)',
          },
        ],
      },
      {
        'id': 2,
        'user': 'Gabriel Lisboa',
        'date': '05 Jun 2019',
        'user_avatar': 'https://i.pravatar.cc/150?img=1',
        'post_content': 'Fala galera, beleza?Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.',
        'comments': [
          {
            'id': 2,
            'user': 'Clara Lisboa',
            'user_avatar': 'https://i.pravatar.cc/150?img=1',
            'comment_content': 'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!',
          },
          {
            'id': 3,
            'user': 'Cézar Toledo',
            'user_avatar': 'https://i.pravatar.cc/150?img=1',
            'comment_content': 'Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!',
          },
        ],
      },
      
    ]
  };

  
  //método render é necessário em class components
  render(){
    return (
      <div className='content'>
      {this.state.posts.map(post => (
        <PostItem key={post.id} post={post}/>
      ))}
      </div>
    );
  }
}

export default PostList;