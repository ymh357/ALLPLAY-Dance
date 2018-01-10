<template>
    <div id="coursePageWrapper">
        <div class="row">
            <div class="col-md-3">
                <div class="btn-group">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Course List <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a href="#/course" @click="CurCourseNo($event.target.text)">Course NO.1</a></li>
                        <li><a href="#/course" @click="CurCourseNo($event.target.text)">Course NO.2</a></li>
                        <li><a href="#/course" @click="CurCourseNo($event.target.text)">Course NO.3</a></li>
                        <li role="separator" class="divider"></li>
                        <li><a href="#/course" @click="CurCourseNo($event.target.text)">Allplay Dance Course Overview</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-9">
                <div v-if="courseNo>0">
                    <div v-if="courseNo==1">
                        <h2>Course NO.1's introduction</h2>
                        <p>111111111111111111111111111</p>
                        <p>111111111111111111111111111</p>
                        <hr style="background-color: darkblue;height:3px">
                        <h2>Course NO.1's dance video</h2>
                        <embed src="http://player.youku.com/player.php/sid/XMzI2NTc4NTMy/v.swf"
                               width="480" height="400"
                               type="application/x-shockwave-flash">
                        </embed>
                    </div>
                    <div v-else-if="courseNo==2">
                        <h2>Course NO.2's introduction</h2>
                        <p>222222222222222222222222222</p>
                        <p>222222222222222222222222222</p>
                        <hr style="background-color: darkblue;height:3px">
                        <h2>Course NO.2's dance video</h2>
                        <embed src="http://player.youku.com/player.php/sid/XMzI2NTc4NTMy/v.swf"
                               width="480" height="400"
                               type="application/x-shockwave-flash">
                        </embed>
                    </div>
                    <div v-else-if="courseNo==3">
                        <h2>Course NO.3's introduction</h2>
                        <p>333333333333333333333333333</p>
                        <p>333333333333333333333333333</p>
                        <hr style="background-color: darkblue;height:3px">
                        <h2>Course NO.3's dance video</h2>
                        <embed src="http://player.youku.com/player.php/sid/XMzI2NTc4NTMy/v.swf"
                               width="480" height="400"
                               type="application/x-shockwave-flash">
                        </embed>
                    </div>
                </div>
                <div v-else>
                    <h2>Overall Introduction to allplay Dance Course.</h2>
                    <p>abc def ghi jkl mno pqr stu vwx yz</p>
                    <p>abc def ghi jkl mno pqr stu vwx yz</p>
                    <p>abc def ghi jkl mno pqr stu vwx yz</p>
                    <p>abc def ghi jkl mno pqr stu vwx yz</p>
                    <p>abc def ghi jkl mno pqr stu vwx yz</p>
                    <p>abc def ghi jkl mno pqr stu vwx yz</p>
                    <p>abc def ghi jkl mno pqr stu vwx yz</p>
                    <p>abc def ghi jkl mno pqr stu vwx yz</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                courseNo:0
            }
        },
        methods: {
            CurCourseNo(course){
                switch (course){
                    case 'Course NO.1':
                        this.courseNo=1;
                        break;
                    case 'Course NO.2':
                        this.courseNo=2;
                        break;
                    case 'Course NO.3':
                        this.courseNo=3;
                        break;
                    case 'Allplay Dance Course Overview':
                        this.courseNo=0;
                        break;
                }
            }
        }
    }
</script>

<style scoped="scoped">
    #coursePageWrapper{
        padding:30px;
    }
</style>