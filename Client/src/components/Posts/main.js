import React from 'react'
import Card from '../Card/main'
// import './style.css'

const Posts = (props) => {
    return (
        <div class="posts">
            <Card
                src="../../assets/blog1.png"
                comments="2 Commets"
                link="Agriculture is our wisest pursuit, because it will in the end contribute most to
                                real wealth, good morals, and happiness."
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                    adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                    nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                    illum similique veniam tempore unde?"
            />
            <hr />
            <Card
                src="../../assets/background.jpg"
                comments="2 Commets"
                link="Agriculture is our wisest pursuit, because it will in the end contribute most to
                                real wealth, good morals, and happiness."
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                    adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                    nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                    illum similique veniam tempore unde?"
            />
            <hr />
            <Card
                src="../../assets/background.jpg"
                comments="2 Commets"
                link="Agriculture is our wisest pursuit, because it will in the end contribute most to
                                real wealth, good morals, and happiness."
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                    adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                    nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                    illum similique veniam tempore unde?"
            />
            <hr />
            <Card
                src="../../assets/background.jpg"
                comments="2 Commets"
                link="Agriculture is our wisest pursuit, because it will in the end contribute most to
                                real wealth, good morals, and happiness."
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                    adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                    nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                    illum similique veniam tempore unde?"
            />
            <div class="pagination flex-row">
                <a href="#"><i class="fas fa-chevron-left"></i></a>
                <a href="#" class="pages">1</a>
                <a href="#" class="pages">2</a>
                <a href="#" class="pages">3</a>
                <a href="#"><i class="fas fa-chevron-right"></i></a>
            </div>
        </div>
    )

}

export default Posts