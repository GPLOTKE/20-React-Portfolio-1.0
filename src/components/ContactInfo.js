// import image from '../../src/images/';

export default function ContactInfo () {
    return     <section class="biocard">
    <div id="contact-info" class="card" /*</section>style="width: 50rem;"*/>
        <img src={""} class="card-img-top" alt="Jerry" />
        <div class="card-body">
            <h2 class="card-title">Contact Info</h2>

            <h5 class="card-subtitle mb-2 text-muted">Email: <a class="card-link" href="mailto: jerry.plotke@gmail.com">Jerry.Plotke@gmail.com</a>
            </h5>

            <h5 class="card-subtitle mb-2 text-muted">GitHub<a class="card-link" href="https://github.com/GPLOTKE">/GPLOTKE</a>
            </h5>

            <h5 class="card-subtitle mb-2 text-muted">LinkedIn<a class="card-link" href="https://www.linkedin.com/in/gerald-plotke/">/Gerald-Plotke</a>
            </h5>

        </div>
    </div>
</section>;
}