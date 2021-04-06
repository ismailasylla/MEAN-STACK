
import {onDelete} from '../posts/posts.component'
// testing delete method
   // testing delete method
  it('should call the delete method', () =>{
    const result = onDelete()
    expect(result).toBeTruthy();
  })