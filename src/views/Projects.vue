<template>
    <div  class="columns is-centered">
        <table style="text-align:left" class="table is-bordered  is-vcentered is-hoverable" > 
            <thead>
                <tr>
                   <th>Title</th>
                   <th>Description</th>
                   <th><abbr title="Date of Release">DOR</abbr></th> 
                   <th>Status</th>
                   <th>Language</th>
                   <th>Link</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>StringToBool</th>
                    <td>A library able to translate Strings containing boolean operation in a True/False statement  </td>
                    <td>May 3rd 2022</td>
                    <td><div class="tag is-success is-medium">Completed (to be refined)</div> </td>
                    <td>Java</td>
                    <td><a href="https://github.com/Jak3d/StringToBoolean" target="_blank"><button class="button is-link"><font-awesome-icon icon="fa-brands fa-github" />&zwnj; View on GitHub</button></a></td>
                </tr>
                <tr>
                    <th>WebPage</th>
                    <td>My own WebPage</td>
                    <td>TBD</td>
                    <td><div class="tag is-warning is-medium">In Progress</div></td>
                    <td>Vue | javascript | HTML</td>
                    <td> <a href="https://github.com/Jak3d/MyPage" target="_blank"><button class="button is-link"><font-awesome-icon icon="fa-brands fa-github" />&zwnj; View on GitHub</button></a></td>

                </tr>
                <tr>
                    <th>Sync Ferrero</th>
                    <td>A visual application to manage an SSL server</td>
                    <td>June 18 2019</td>
                    <td><div class="tag is-info is-medium">Private</div></td>
                    <td>C#</td>
                    <td><a href="..." target="_blank"><button class="button is-danger" disabled><font-awesome-icon icon="fa-brands fa-github" />&zwnj; View on GitHub</button></a></td>
                </tr>
                <tr disabled>
                    <th>TBD</th>
                    <td>Thesis project, to be release once project has started</td>
                    <td>TBD</td>
                    <td><div class="tag is-warning is-medium">In Progress</div></td>
                    <td>Python</td>
                    <td><a href="" target="_blank"><button class="button is-link" disabled><font-awesome-icon icon="fa-brands fa-github" />&zwnj; View on GitHub</button></a></td>
                </tr> 
            </tbody>
        </table>
    </div>
</template>
<script>
    export default{
        name: 'ProjectPage',
    }
</script>
<style>
    
</style>