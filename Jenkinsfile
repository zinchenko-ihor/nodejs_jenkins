node {

    checkout scm

    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {

        def customImage = docker.build("jumper93/nodejsapp")

        /* Push the container to the custom Registry */
        customImage.push()
    }
}
