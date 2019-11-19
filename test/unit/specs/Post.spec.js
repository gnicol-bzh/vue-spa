import Vue from 'vue'
import Post from '../../../src/theme/Post.vue'
import { expect } from 'chai'

describe('Post.vue', () => {
    const createComponent = () => {
        const PostConstructor = Vue.extend(Post)
        return new PostConstructor({
            propsData: {
                link: 'http://www.pluralsight.com',
            },
        }).$mount()
    }
    it('should render th link', () => {
        const comp = createComponent()
        expect(comp.$el.querySelector('.card-footer-item').getAttribute('href')).to.equal('http://www.pluralsight.com')
    })

    it('should update element\'s href when property link changes', (done) => {
        const comp = createComponent()
        expect(comp.$el.querySelector('.card-footer-item').getAttribute('href')).to.equal('http://www.pluralsight.com')

        comp.link = 'http://www.google.com'

        Vue.nextTick(() => {
            expect(comp.$el.querySelector('.card-footer-item').getAttribute('href')).to.equal('http://www.google.com')
            done()
        })
    })
})
