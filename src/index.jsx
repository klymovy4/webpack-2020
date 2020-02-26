import * as $ from 'jquery'
import Post from './Post'
import json from './asets/json'
import xml from './asets/data.xml'
import csv from './asets/data.csv'
import logo from '@/asets/logo2'
import React from 'react'
import { render } from 'react-dom'
import './babel'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'






const post = new Post('webpack post title', logo)

// $('pre').addckassName('code').html(post.toString())
console.log('Post to string', post.toString());

const App = () => (
    <div className='container'>
        <h1>Webpack 3</h1>

        <hr />
        <div className='logo' />
        <hr />
        <pre />

        <div className='box'>
            <h2>less</h2>
        </div>
        <div className='card'>
            <h2>scss</h2>
        </div>
    </div>
)

render(<App />, document.getElementById('app'))

console.log('json', json);
console.log('xml', xml);
console.log('csv', csv);
